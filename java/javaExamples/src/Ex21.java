// static 변수 / 함수에 대해서
// static 예약어 : 정적 변수(객체)/함수를 지정할 때 사용
// 의미 : 프로그래밍 구동시에 고정된 메모리 번지에 들어감.(자동new)
//       프로그램 종료시까지 변경되지 않음
// 사용이유 :
// 1. 시작점 (Entry Point)를 지정할 때 사용함.
// 2. 중요한 데이터를 안정적으로 저장할 때 주로 사용
// 3. 자주 사용하는 유틸성 클래스에 지정한다.
//      new를 안해도 클래스 함수 사용 가능

import java.util.Random;

class BallFactory {
    int ballCnt = 100;
    void make() {
        this.ballCnt++;
        System.out.println("축구공 생산!");
    }
}

// 이 클래스가 생산되는 시점은 main에서 호출할 때 생성됨
class FoodFactory {
    static int foodCnt = 200;
    static void make() {
        foodCnt++;
        System.out.println("도시락 생산");
    }
}

public class Ex21 {
    public static void main(String[] args) {

        // 객체를 생성(new)해야 사용가능
        BallFactory bf = new BallFactory();
        System.out.println(bf.ballCnt);
        bf.make();
        
        // 객체를 생성하지 않고도 사용가능(static)
        System.out.println(FoodFactory.foodCnt);
        FoodFactory.make();

        // Random 클래스 사용시
        Random rand = new Random();
        // pow같은 경우 static이라서 객체의 생성 없이 바로 사용
        Math.pow(2,3);
    }
}
