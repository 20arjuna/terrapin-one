import Image from "next/image";
import CourseTable from "../components/CourseTable";
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1>Terrapin One</h1>
      <p>by TerrapinDev</p>
      <CourseTable />
    </div>
  );
}
