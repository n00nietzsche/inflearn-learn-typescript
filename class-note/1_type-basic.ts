// JS 문자열 선언
const str = "hello";

// TS 문자열 선언
const strTs: string = "hello";

// TS 숫자
const num: number = 10;

// TS 배열 선언
const arr: Array<number> = [1, 2, 3];
const heros: Array<string> = ["Capt", "Thor", "Hulk"];

// TS 배열 선언 -> 배열 리터럴 사용
const items: number[] = [1, 2, 3];

// ---------------------------------------------------

// TS 튜플
const nameAndAge: [string, number] = ["jakeseo", 100];

// TS 객체
const obj: object = {};

// TS 객체 프로퍼티의 타입 정의하기
const person: {
    name: string;
    age: number;
} = {
    name: "Jake",
    age: 100,
};

// TS 불리언
const show: boolean = true;
