// final 키워드
// 1. 상수형 변수를 선언할 때
// 2. final class : 상속 불가
// 3. final 메소드 : 오버라이드 불가

//final
 class FinalClass {
    String name = "파이널 클래스";
    int age; // 0으로 초기화 됨
    // final 상수는 다른 곳에서 값 지정이 불가능하기 때문에
    // 반드기 선언시 초기값을 지정해줘야 함
    final int price = 10000; // 상수형 변수
    final void disp() {}
}
// 상속받으려는 클래스 앞에 final이 붙어있으면 상속불가
class LastClass extends FinalClass {
    //@Override
    // final 붙은 메소드 오버라이드 불가능
    //void disp();
}

public class Ex33 {
    public static void main(String[] args) {
        int i = 10;
        final int j = 100; // 상수로 지정됨
        // j = 30; -> 값 변경 불가능
    }
}
