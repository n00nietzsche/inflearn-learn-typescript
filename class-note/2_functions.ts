// TS 기본 함수 정의 (파라미터 및 반환값에 타입 정의)
function sum(a: number, b: number): number {
    return a + b;
}

// TS는 함수의 스펙을 정확히 이해해서 에러를 내줌
// 필요 이상의 파라미터가 들어온다면 에러
sum(10, 20);

// 함수의 옵셔널 파라미터
function sumOptionalParameter(a: number, b: number, c?: number) {
    if (c !== undefined) {
        return a + b + c;
    }

    return a + b;
}

sumOptionalParameter(10, 20);
sumOptionalParameter(10, 20, 30);
