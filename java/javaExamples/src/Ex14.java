public class Ex14 {
    public static void main(String[] args) {
        // 반복문 fir while do-while
        // * js문법과 거의 유사함

        // 패턴
        // for ( 초기화; 조건; 증감) {
        //      실행문
        // }
        for(int i =0; i<5; i++) {
            System.out.println("i = "+ i);
        }

        // 무한반복문 만드는 방법
//        for(;;){}
//        while(true){}
        
        // 1부터 100 사이의 3의 배수만 출력하시오
        for(int i=1; i<100; i++) {
            if(i%3 == 0) {
                System.out.println("i = " + i);
            }
        }
        
        // 디버깅 잘하려면 ? 삽질 많이 해보기 ㅋ

        
    }
}
