import styles from "./Test.module.scss";
import React from "react";
import {Radiobutton} from "../buttons/Radiobutton";
import {Button} from "../buttons/Button";
import {useRouter} from "next/router";

export function Test(props) {

    const router = useRouter();
    const { num } = router.query;
    console.log(num)

    const test = {
        title: "Тест номер один",
        timeLimit: 3600,
        questions: [
            {text: "2 + 2",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "6", valid: false},
                    {text: "8", valid: false},
                    {text: "4", valid: true},
                    {text: "3", valid: false},
                ]
            },
            {text: "10 + 5",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "20", valid: false},
                    {text: "25", valid: false},
                    {text: "15", valid: true},
                    {text: "17", valid: false},
                ]
            },
            {text: "3 + 7",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "8", valid: false},
                    {text: "6", valid: false},
                    {text: "10", valid: true},
                    {text: "12", valid: false},
                ]
            },
            {text: "1 + 1",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "2", valid: false},
                    {text: "3", valid: false},
                    {text: "4", valid: true},
                    {text: "5", valid: false},
                ]
            },
            {text: "10 = 10",
                timeLimit: 60,
                type: "radio",
                answers: [
                    {text: "8", valid: false},
                    {text: "6", valid: false},
                    {text: "10", valid: true},
                    {text: "12", valid: false},
                ]
            },
        ]
    };

    let array = [];
    for (let i = 0; i < test.questions.length; i++) {
        array.push(i + 1);
    }

    console.log(array);

    return !num ? <></> :
        <div className={styles.test}>

        <div className={styles.test_count}>
            <div className={styles.test_count_icon}></div>
            <div className={styles.test_count_numframe}>
                    {array.map(number => <div className={styles.test_count_numframe_numbers} onClick={() => router.push(`/test/${number}`)}>{number}</div>)}
            </div>
        </div>

        <div className={styles.test_header}>
            <div className={styles.test_header_counter}>
                <div className={styles.test_header_counter_icon}></div>
                <div className={styles.test_header_counter_num}>1/{test.questions.length}</div>
            </div>

            <div className={styles.test_header_timer}>
                <div className={styles.test_header_timer_icon}></div>
                <div className={styles.test_header_timer_num}>60:00</div>
            </div>

            <div className={styles.test_header_name}>{test.title}</div>
        </div>

        <div className={styles.test_questframe}>
            <div className={styles.test_questframe_text}>
                {test.questions[num - 1].text}
            </div>
            <div className={styles.test_questframe_answerframe}>
                <Radiobutton text={test.questions[num - 1].answers[0].text}/>
                <Radiobutton text={test.questions[num - 1].answers[1].text}/>
                <Radiobutton text={test.questions[num - 1].answers[2].text}/>
                <Radiobutton text={test.questions[num - 1].answers[3].text}/>
            </div>
            <div className={styles.test_questframe_buttonframe}>
                <div className={styles.test_questframe_buttonframe_button}>Пропустить</div>
                <Button text={'ОТВЕТИТЬ'} onClick={() => router.push('/test/2')}/>
            </div>
        </div>
    </div>
}