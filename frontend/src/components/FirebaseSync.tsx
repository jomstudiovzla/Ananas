'use client';

import { useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useStore, Order, AdminLog } from '@/store/useStore';
import { Product } from '@/data/mockDb';

export default function FirebaseSync() {
  const setProducts = useStore(state => state.setProducts);
  const setOrders = useStore(state => state.setOrders);
  const setAdminLogs = useStore(state => state.setAdminLogs);

  useEffect(() => {
    console.log("FirebaseSync montado. Suscribiendo a colecciones...");

    // Productos
    const qProducts = query(collection(db, "products"));
    const unsubProducts = onSnapshot(qProducts, (snapshot) => {
      const prods: Product[] = [];
      snapshot.forEach(doc => {
        prods.push(doc.data() as Product);
      });
      if (prods.length > 0) {
        setProducts(prods);
      }
    });

    // Órdenes
    let previousOrders: Record<string, string> = {};
    const qOrders = query(collection(db, "orders"));
    const unsubOrders = onSnapshot(qOrders, (snapshot) => {
      const ords: Order[] = [];
      snapshot.forEach(doc => {
        const order = doc.data() as Order;
        ords.push(order);

        if (previousOrders[order.id] && previousOrders[order.id] !== order.status) {
          if (useStore.getState().user?.id !== 'admin') {
            useStore.getState().addUserNotification({
              title: `Pedido ${order.id}`,
              message: `El estado de tu pedido ha cambiado a: ${order.status}`
            });
          }
        }
        previousOrders[order.id] = order.status;
      });
      // Ordenar localmente por fecha (las más recientes primero)
      ords.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setOrders(ords);
    });

    // Logs de Admin
    const qLogs = query(collection(db, "adminLogs"));
    const unsubLogs = onSnapshot(qLogs, (snapshot) => {
      const logs: AdminLog[] = [];
      snapshot.forEach(doc => {
        logs.push(doc.data() as AdminLog);
      });
      logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setAdminLogs(logs);
    });

    return () => {
      unsubProducts();
      unsubOrders();
      unsubLogs();
    };
  }, [setProducts, setOrders, setAdminLogs]);

  return null;
}
