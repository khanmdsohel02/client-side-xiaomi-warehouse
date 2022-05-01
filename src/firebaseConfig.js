import { getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDlqN6zf1klvjyUFieoM-Qv6lnIpuI2bEc",
    authDomain: "xiaomi-warehouse.firebaseapp.com",
    projectId: "xiaomi-warehouse",
    storageBucket: "xiaomi-warehouse.appspot.com",
    messagingSenderId: "894444372507",
    appId: "1:894444372507:web:f464d011ccec71e8c52ebe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 