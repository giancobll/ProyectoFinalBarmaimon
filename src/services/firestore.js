import { initializeApp } from "firebase/app";
import products from "../Data/products";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdU1iQ2erLHzXYEMUbtry2JJqzGvFIE5Y",
  authDomain: "demascotas1-221eb.firebaseapp.com",
  projectId: "demascotas1-221eb",
  storageBucket: "demascotas1-221eb.appspot.com",
  messagingSenderId: "897179498809",
  appId: "1:897179498809:web:a10a349045a16b03b710e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItemsList()
{

    const productsRef = collection(db, 'products');

    const q = query(productsRef, orderBy('index'));
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    const docsData = documents.map((doc) => {
        console.log("Datos: ", doc.data());
        console.log("Id: ", doc.id);
        return  {id: doc.id, ...doc.data()};
    });

    return docsData;
}

export async function getItemDetail(idURL)
{
    
    const docRef = doc(db, "products", idURL);    
    const docSnap = await getDoc(docRef);  
    return  {id: docSnap.id, ...docSnap.data()};
}

export async function getItemsCategory(categoryid)
{
    const productsRef = collection(db, "products");
    
    const q = query(productsRef, where('category', '==', categoryid));
    
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;

    const docsData = documents.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });

    return docsData;
}

export async function createOrder(order)
{
  const collectionOrdersRef = collection(db, 'orders');
  const response = await addDoc(collectionOrdersRef, order)
 return response.id;
}
