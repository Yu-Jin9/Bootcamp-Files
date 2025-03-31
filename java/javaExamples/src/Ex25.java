//싱글톤(Singleton)
//  : 프로그램안에서의 유일한 클래스 객체
//  : new를 통해서 여러개의 객체를 반복적으로 찍어낼 수 있다.
//  : 예) 붕어빵1, 붕어빵2, ....
//      절대붕어빵(유일한 붕어빵)
//유일한 객체가 필요한 이유
//  : 유일한 정보를 저장하기 위해서

class FishBun { // 일반 붕어빵
    int bunNo = 10;
}

class UniqueFishBun { // 유일한 붕어빵 (싱글톤)
    int bunNo = 30;
    private static UniqueFishBun singleton; // null
    static UniqueFishBun getInstance() {
        if(singleton == null) {
            singleton = new UniqueFishBun();
        }
        return singleton;
    }
}

public class Ex25 {
    public static void main(String[] args) {

        // 싱글톤 사용하기
        UniqueFishBun uBun1 = UniqueFishBun.getInstance();
        UniqueFishBun uBun2 = UniqueFishBun.getInstance();
        // 싱글톤의 경우 uBun1과 uBun2의 주소가 동일함
        // => 동일한 객체에서 가져와서 사용함을 의미
        System.out.println(uBun1);  // UniqueFishBun@3b07d329
        System.out.println(uBun2);  // UniqueFishBun@3b07d329
        // 싱글톤의 경우 uBun1에서 bunNo를 변경하면 
        // uBun2의 bunNo도 변경됨
        // why?? 같은 객체에서 가져와서 사용하기 때문
        uBun1.bunNo = 40;
        System.out.println(uBun1.bunNo);
        System.out.println(uBun2.bunNo);
        
        // 일반 붕어빵 사용하기
        // 이 경우 num1에서 데이터를 처리하고 
        // bun2, bun3에 데이터를 넘겨 주기는 어려움
        // 갹체지향의 특징이자 단점
        FishBun bun1 = new FishBun();
        FishBun bun2 = new FishBun();
        FishBun bun3 = new FishBun();

        // 해당 주소들에 저장된다는 ㅓㄱㅅ
        System.out.println(bun1);   // FishBun@3b07d329
        System.out.println(bun2);   // FishBun@41629346
        System.out.println(bun3);   // FishBun@404b9385

        // 이렇게 bun1의 bunNo를 변경해도 
        // bun2의 bunNo에는 아무 영향을 끼치지 않음
        bun1.bunNo = 20;
        System.out.println(bun1.bunNo);
        System.out.println(bun2.bunNo);

        // 일반 객체는 일관된 데이터를 저장하기 어렵다.
        // dynamic 객체는 Heap 영역에 저장된다.
        // GC (Garbage Collector)가 자동으로 사용하지 않는 메모리(객체)를 자동회수함.

    }
}
