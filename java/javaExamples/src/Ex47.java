public class Ex47 {
    public static void main(String[] args) {
        // throws문
        //  : 자신을 호출한 메소드에 예외처리를 떠넘기는 것
        try {
            myFunc();
        }
        catch (Exception e) {
            MyException e2 = (MyException)e;
            e.getMessage();
        }
    }
    
    static void myFunc () {
        System.out.println(10 / 0); //산술 오류
    }
}

//사용자 정의 예외
class  MyException extends Exception {
    String message = "";
    public void printMessage(){
        System.out.println(this.message);
    }
}