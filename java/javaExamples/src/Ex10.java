public class Ex10 {
    public static void main(String[] args) {
        // sout
        System.out.println("sout");
        int i = 10;
        //soutv => 변수와 함께 출력문 작성
        System.out.println("i = " + i);

        muFunc(20);

        for (int j = 0; j < 5; j++) {
            System.out.println("j = " + j);
        }

        int[] arr = {};
        // ifn
        if (arr == null) {
            System.out.println("arr = " + arr);
        }
    }

    static void muFunc(int p) {
        // soutm => 현재 메소드와 함께 출력문 작성
        System.out.println("Ex10.muFunc");
        // soutp => 메소드의 파라미터와 함께 출력문 작성
        System.out.println("p = " + p);
    }
}
