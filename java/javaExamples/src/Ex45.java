public class Ex45 {
    public static void main(String[] args) {
        // 예외 처리 (Exception Handing)
        // : 예상치 못한 오류 - 개발/런타임(실행) 처리가능함
        
        // 1. try catch문
        // 2. throws문
        
        //패턴
        // try {
        //  예외가 발생할만한 실행문
        // }
        // catch(예외클래스 객체) {
        //  예외발생시 처리하는 실행문 - 에러내용 출력
        // }

        String name = null;
        System.out.println(name);
        //java.lang.NullPointterException => 에러 발생
        System.out.println(name.toLowerCase());

        try {
            System.out.println(name.toLowerCase());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }


    }
}
