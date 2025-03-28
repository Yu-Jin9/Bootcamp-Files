public class Ex02 {
    public static void main(String[] args) {
        // 한 줄 주석문
        /*
        여러줄
        주석문
         */
        // 콘솔 출력

        int i = 150;

        System.out.println("콘솔 출력");
        // + 연산자  -> 왼쪽을 기준으로 문자열이 먼저나열 됬을 경우 나머지도 문자열로 인식해서 문자열로 합침
        // 소괄호를 활용해서 원하는 결과가 나오게 하면 됨
        System.out.println("콘솔" + "출력");
        System.out.println("화면"+10+20);
        System.out.println(10+20+"화면");
        System.out.println(10+(20+"화면"));

        // 한 줄 출력 후 줄바꿈 있음
        System.out.println("한 줄 출력" + i);
        
        // 한 줄 출력 후 줄바꿈 없음
        System.out.println("출력" + i);
        
        // \n : 줄바꿈 특수문자
        System.out.printf("\n출력" + i);
        System.out.printf("\n" + i);

        // \n : 줄바꿈 특수문자
        System.out.printf("%d\n", 30); //10진수
        System.out.printf("%o\n", 30); //8진수
        System.out.printf("%x\n", 30); //16진수
        System.out.printf("%e\n", 300.0); //지수형 출력

        // 다음과 같이 출력하시오.
        // 1. "Coding is Good!"
        // 2. "Java"문자와 "Programming"문자를  +연결연산자로
        //     연결해서 출력하시오.
        // 3. 십진 정수 123을 printf를 이용하여 출력하시오.
        // 4. 십진 정수 123을 printf를 이용하여 "00123"으로 출력하시오.
        // 5. 실수형 123.45f를 printf를 이용하여 "123.450"로 출력하시오.
        System.out.println("Coding is Good!");
        System.out.println("Java" + "Programming");
        System.out.printf("%d\n", 123);
        System.out.printf("%5d\n", 123);
        System.out.printf("%05d\n", 123);
        System.out.printf("%.3f\n", 123.45f);

    }
}
