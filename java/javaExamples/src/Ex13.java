public class Ex13 {
    public static void main(String[] args) {
        // 조건문 switch문
        // * js와 거의 유사함
        int a = 10;
        switch (a) {
            case 10 :
                System.out.println("10입니다.");
                break;
                // 만약 case1에 brak;를 안 넣는다면 
                // case2로 넘어가게 됨
            case 20 :
                System.out.println("20입니다.");
                break;
            default :
                System.out.println("그 외의 경우");
                break;
        }

        // JDK 8(1.8) 주로 대세라서 배포할 때 주의 해야 됨
        // 이 문법은 (case에 여러 경우 , , 명시) JDK 14 버전부터 가능
        // 개발환경과 배포환경이 다를 경우 제대로 실행되지 않음
        //  => Docker (도커) : 위와 같은 외부환경변수에 따르지 않음
        int month = 3;
        switch ( month ) {
            case 3, 4, 5 :  // JDK 14
                break;
            case 6, 7, 8 :
                break;
            case 9, 10, 11 :
                break;
            // JDK 14이하 구버전
            case 12 : break;
            case 1 : break;
            case 2 : break;
        }
    }
}
