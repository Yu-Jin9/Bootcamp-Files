import java.util.Scanner;

public class Ex11 {
    public static void main(String[] args) {
        //Scanner클래스 함수들
        // nextLine() : 문자열을 입력받되 엔터칠때까지(공백포함)
        // next() : 문자열의 공백까지만 입력받음.
        // nextInt() : 문자열을 받아서 정수로 반환해줌.
        // nextFloat() :             실수로 반환해줌.
        // nextDouble() :            실수로 반환해줌.

        System.out.println("str1을 입력하세요.");
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        System.out.println("str1 = " + str1);

        System.out.println("str2를 입력하세요.");
        String str2 = sc.next();
        System.out.println("str2 = " + str2);

        sc.nextLine();

        //Exception in thread "main" java.util.InputMismatchException
        //next()함수에 저장된 버퍼메모리가 정리되지 않아서이다.
        //해결방안 : nextLine()함수를 한번 실행해준다.
        System.out.println("num을 입력하세요.");
        int num1 = sc.nextInt();
        System.out.println("num1 = " + num1);

        sc.close(); //scan객체가 사용중인 리소스(메모리,입출력자원) 정리
    }
}
