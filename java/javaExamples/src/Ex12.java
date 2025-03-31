import java.util.Random;

import static java.lang.Integer.parseInt;

public class Ex12 {
    public static void main(String[] args) {
        /* 조건문
         *  - 자바스크립트 문법과 거의 동일
         * 1. if문
         * 패턴
         * if (조건문){ }
         */
        if (10 < 20) {
            System.out.println("10이 20보다 작음");
        }
        if (10 < 20) // 실행문이 한 줄 일 댸는 증괄호 생략 가능 (들여쓰기 / 내어쓰기 구분)
            System.out.println("10이 20보다 작음 2");

        // if else문
        if (10 > 20) {
            System.out.println("10 > 20");
        } else {
            System.out.println("10 <= 20");
        }
        // 중괄호 생략 버전
        if (10 > 20) System.out.println("2: 10>20");
        else System.out.println("2: 10<=20");
        
        // 3. if else if문
        int score = 90;
        if(score == 90) {
            System.out.println("90");
        } else if (score == 80) {
            System.out.println("80");
        } else {
            System.out.println("그 외의 수");
        }

        // 4. 중첩 if문
        // 논리가 들어가니까 잘 생각하기
        if(true) {  // 조건1
            if(false) { // 조건2
                // 조건1이고 (AND) 조건2이다.
            }
            else if(true) { // 조건3
                // 조건1이고 조건2는 아니고, 조건3이다.
            }
        }
        
        // 자바에서 랜덤수 발생
        // 1. Math.random() 0.0 ~ 0.999 ---
        // 2. 랜덤 클래스
        //      rand.nextInt(6) 0~5 까지의 랜덤 정수 발생

        //연습문제
        //1.
        //철수와 영희가 주사위 놀이를 하고 있다.
        // 주사위 2개를 던져서,
        // 두개 다 짝수가 나오면 철수 승!
        // 두개 다 홀수가 나오면, 영희 승!
        // 그외의 경우는 무승부! 이다.
        // 게임의 결과를 출력하시오.
//        for(int i =0; i<=6; i++)
//        {
//            for(int j=0; j<=6; j++){
//                System.out.println("i,j : " + i +", "+ j);
//            }
//        }
        Random rand = new Random();
        int dice1 = rand.nextInt(6) + 1;
        int dice2 = rand.nextInt(6) + 1;
        System.out.println("dice1 = " + dice1);
        System.out.println(dice2);

        if (dice1 % 2 == 0 && dice2 % 2 == 0) {
            System.out.println("철수 승!");
        } else if (dice1 % 2 == 1 && dice2 % 2 == 1) {
            System.out.println("영희 승!");
        } else {
            System.out.println("무승부!");
        }
        System.out.println();

        //2.
        //철수와 영희을 주사위게임을 하고 있다.
        //주사위 2개를 철수가 던지고,
        //주사위 2개를 영희도 던진다.
        //게임룰 : 첫번째 주사위는 십의 자릿수로하고,
        //        두번째 주사위는 일의 자릿수로 해서,
        // 더 높은 점수를 가진 사람이 승리한다.
        //출력값 예시 :
        //        철수 주사위1 수 : 1
        //        철수 주사위2 수 : 3
        //        철수의 점수는 13
        //        영희 주사위1 수 : 3
        //        영희 주사위2 수 : 4
        //        영희의 점수는 34
        //        영희 승!

        int d1 = rand.nextInt(6) + 1;
        int d2 = rand.nextInt(6) + 1;
        String str1 = String.valueOf(d1);
        String str2 = String.valueOf(d2);
        String chul = str1 + str2;
        int chulInt = Integer.parseInt(chul);
        System.out.println("철수 주사위1 수 :" +d1);
        System.out.println("철수 주사위2 수 :" +d2);
        System.out.println("철수의 점수 = " + chul);

        int d3 = rand.nextInt(6) + 1;
        int d4 = rand.nextInt(6) + 1;
        String str3 = String.valueOf(d3);
        String str4 = String.valueOf(d4);
        String young = str3 + str4;
        int youngInt = Integer.parseInt(young);
        System.out.println("영희 주사위1 수 :" +d3);
        System.out.println("영희 주사위2 수 :" +d4);
        System.out.println("영희의 점수 = " + young);

        System.out.println("결과는  : ");
        if(chulInt > youngInt) {
            System.out.println("철수의 승리");
        } else if (chulInt == youngInt) {
            System.out.println("무승부");
        } else {
            System.out.println("영희의 승리");
        }
        
        // 값을 그냥 정수로 처리하는 경우
        int num1 = rand.nextInt(6)+1;
        int num2 = rand.nextInt(6)+1;
        int chulS = num1 * 10 + num2;
        
        int num3 = rand.nextInt(6)+1;
        int num4 = rand.nextInt(6)+1;
        int youngH = num3 * 10 + num4;
        
        if(chulS > youngH) {
            System.out.println("철수의 승리");
        } else if (chulS == youngH) {
            System.out.println("무승부");
        } else {
            System.out.println("영희의 승리");
        }
    }
}
