import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore/lite";
import moment from "moment/moment";

const firebaseConfig = {
  apiKey: "AIzaSyBLbcJb38fYSc2f-3EfL-SHbBgesJGz_m8",
  authDomain: "react-42be0.firebaseapp.com",
  projectId: "react-42be0",
  storageBucket: "react-42be0.appspot.com",
  messagingSenderId: "93058818044",
  appId: "1:93058818044:web:06820a52647c84adbc5c79",
  measurementId: "G-B6X48MGFH5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getOrders(email) {
  const docRef = collection(db, "users", email, "orders");
  const q = query(docRef, orderBy("timestamp", "desc"));
  const docSnap = await getDocs(q);

  const items = docSnap.docs.map((doc) => {
    const order = doc.data();
    return {
      id: doc.id,
      amount: order.amount,
      images: order.images,
      amount_shipping: order.amount_shipping,
      timestamp: moment(order.timestamp.toDate()).unix()
    }
  });
  return items;
}

export default getOrders;
