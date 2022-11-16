import {Test} from "../../components/pages/Test";
import {useRouter} from "next/router";


export default function Num() {

    const router = useRouter();
    const { num } = router.query;

    return (
        <Test/>
    )
}