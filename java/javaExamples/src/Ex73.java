public class Ex73 {
    public static void main(String[] args) {
        //연습문제 1
        //1부터 N까지의 합계를 출력하시오.
        // int n = 5;
        // sum( n )을 호출하면, 5+4+3+2+1 까지의 합이 반환된다.
        int n = 5;
        int result = sum(n);
        System.out.println("result = " + result);

        //연습문제 2
        // 십진정수를 2진수로 변환하여 출력하시오.
        // printBin( int n )
        // printBin( 10 ) 호출시, 1010으로 출력됨.
        //   2 )  10
        //         5 - 0
        //         2 - 1
        //         1 - 0
        int n2 = 10;
        String result2 = printBin(n2);
        System.out.println("result2 = " + result2);


        //연습문제 3
        // 문자열을 역으로 출력하기
        // 예) "abcde" => "edcba"
        String str = "abcd";
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb.reverse());
    }

    static int sum(int n) {
        if(n==1) {
            return 1;
        }
        return n + sum(n-1);
    }

    static String printBin(int n) {
        String result = "";
        while (n>0) {
            result = (n % 2) + result;
            n = n / 2;
        }
        return result;
    }
}
