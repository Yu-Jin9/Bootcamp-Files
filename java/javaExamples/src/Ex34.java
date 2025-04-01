// 클래스 -> 객체타입의 배열
class Snack {
    String name = "새우깡";
    int price = 1000;

    public Snack(String name, int price) {
        this.name = name;
        this.price = price;
    }
}

public class Ex34 {
    public static void main(String[] args) {
        // 일반적인 배열 선언
        // 타입[] 배열이름 = new 타입[개수]
        int[] nums = new int[3];

        // 클래스도 하나의 타입으로 생각한다.
        Snack[] snacks = new Snack[5];
        snacks[0] = new Snack("짱구", 2000);
        snacks[1] = new Snack("감자칩", 2500);
        snacks[2] = new Snack("빼빼로", 1100);
        snacks[3] = new Snack("콘초", 1500);
        snacks[4] = new Snack("미쯔", 1200);
        System.out.println(snacks[2].name);

        for( Snack snack : snacks) {
            System.out.println(snack.name);
            System.out.println(snack.price);
        }
    }
}
