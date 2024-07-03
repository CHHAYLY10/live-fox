import { Button, Result } from "antd";
import Link from "next/link";

export default function ResultAPP() {
  return (
    <>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={<Button type="primary"><Link href={'/'}>Next</Link></Button>}
      />
    </>
  );
}
