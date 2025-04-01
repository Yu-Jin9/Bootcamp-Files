/*  메소드 오버라이딩
*
* */

class  Cable {
    int price = 1000;
    void sale() {
        System.out.println("일반 케이블 판매");
    }
}

class PowerCable extends Cable {
    int price = 2000;
    @Override //어노테이션 : 컴파일 지시어
    void sale() {
        System.out.println("PowerCable 판매");
    }
}

public class Ex30 {
    public static void main(String[] args) {
        PowerCable pc = new PowerCable();
        // 부모꺼가 아니라 자식꺼가 우선으로 출력되는 것을 확인할 수 있음
        System.out.println(pc.price);
        pc.sale();
    }

}
