// 기술면접 질문
/*
* 1. 오버로딩 vs 오버라이딩
* 오버라이드 : 상속관계에서 자식클래스가 부모클래스의 메소드를 재정의하는 것
* 2. 추상화 클래스 vs 인터페이스
* 3. 다형성 (중요)
* 4. 상속
* 5. 생성자
* */


// 메소드 오버라이딩 (Over riding), 올라타기
// : 상속관계에서 자식클래스의 메소드가
// 부모클래스의 메소드를 재정의 하는 것

// 메소드 오버로딩(Over loading), 과적
// : 매개변수의 타입과 갯수를 다르게 함으로
//   함수의 기능을 확장하는 것
// : 같은 이름의 함수를 여러번 사용할 수 있다.
// : println(정수형) => printlnInt
// : println(문자열) => printlnStr

 class Ex24 {   // Ex24 : 메소드 오버로딩

    // 이 경우 메소드명이 동일해도 매개변수가 어디에 들어갈지 고민을 안해도 됨
    // 메소드의 매개변수 타입을 다 다르게 했기 때문

    static void echo() {
        System.out.println("echo");
    }

    static void echo(String str) {
        System.out.println("echo " + str);
    }

    static void echo (int i) {
        System.out.println("echo "+i);
    }

     static void echo (int i, int j) {
         System.out.println("echo "+i+" "+j);
     }
    public static void main(String[] args) {

        echo();
        echo("hey~");
        echo(10);
        echo(10, 20);
    }
}
