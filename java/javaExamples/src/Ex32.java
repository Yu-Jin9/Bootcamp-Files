// 상속관계에서 생성자 함수 호출되는 순서
class Energy {
    int price = 1000;
    public Energy() {
        System.out.println("Energy()");
    }
    public Energy(int price){
        this.price = price;
        System.out.println("Energy(int)");
    }
}
class  WindEnergy extends Energy {
    int price = 2000;
    public WindEnergy(){
        System.out.println("WindEnergy()");
    }
    public WindEnergy(int price){
        super(price); // 부모클래스의 (매개변수)생성자 함수 호출
        this.price = price;
        System.out.println("WindEnergy(int)");
    }

}
/*  !! 알고 가기 !!
* this. : 자기클래스의 필드 / 메소드 접근
* this() : 자기 클래스의 생성자 함수 호출
* super. : 부모 클래스의 필드 / 메소드 접근
* super() : 부모클래스의 생성자 함수 호출
* */
public class Ex32 {
    public static void main(String[] args) {
        // 부모 기본 생성자 -> 자식 기본 생성자 순서로 호출됨
        WindEnergy we = new WindEnergy();
        // 부모의 기본 새성자 -> 자식 매개변수 있는 생성자 호출됨
        WindEnergy we2 = new WindEnergy(50000);
    }
}
