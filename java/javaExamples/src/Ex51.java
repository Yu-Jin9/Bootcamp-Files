//제네릭( Generic )
//     : 형(Type)에 따른 데이타전송(타입선언)을 편하기 하기 위해서
//     : 가변적인 타입의 선언을 위해서( 상속과 상관없다. )
//     : JDK 1.5버전부터 지원
//주요 JDK 버전 : 1.8(8버전) 11버전  17버전
//기술면접 : 제네릭의 기능은 무엇인가?

class  Keyboard1 {
    //Object
    //  : 모든 타입의 객체를 담을 수 있다.(다형성)
    //  : 단점 - 다운 캐스팅(강제형변환)해야 됨
    private Object object;
    public Object getObject() {
        return object;
    }
    public void setObject(Object object) {
        this.object = object;
    }
}
// <>안에 들어가는 type은 유저가 작성하는거라 T아니라 다른거로 써도 됨
class Keyboard2<T> {
    private T object;
    public T getObject() {
        return object;
    }
    public void setObject(T object) {
        this.object = object;
    }
}

public class Ex51 {
    public static void main(String[] args) {
        Keyboard1 k1 = new Keyboard1();
        k1.setObject("키보드");    //업캐스팅 변경
        String str = (String) k1.getObject();   //다운캐스팅
        System.out.println(str);

        Keyboard2<String> k2 = new Keyboard2<>();
        k2.setObject("키보드");
        String str2 = k2.getObject();
        System.out.println("str2 = " + str2);
        
        Keyboard2<Integer> k3 = new Keyboard2<>();
        k3.setObject(10);
        Integer i = k3.getObject();
        System.out.println("i = " + i);
    }
}
