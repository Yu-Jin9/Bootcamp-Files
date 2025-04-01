// 상속관계에서의 생성자 함수
class Robot {
    String color = "빨강";
    int price = 1000;
    //생성자 함수
    // 기본 생성자 함수 - 매개변수 없음
    public Robot( ) {
        System.out.println("기본생성자 호출");
    }
    // 매개변수가 있는 생성자 함수 (Setter 역할)
    public Robot(String color, int price) {
        this.color = color;
        this.price = price;
    }

}

public class Ex31 {
    public static void main(String[] args) {
        // 기본 생성자 호출
        Robot robot = new Robot();
//        Robot robot2 = new Robot("파랑");
        // 매개변수가 있는 생성자 호출 (값 넣으면 됨)
        Robot robot3 = new Robot("노랑", 2000);
    }
}
