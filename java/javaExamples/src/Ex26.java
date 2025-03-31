//연습문제 - 싱글톤 만들기
//클래스 이름 : TossAccount
//  필드(private) : 계좌번호(1234), 고객이름(홍길동), 잔액(1000), 이자율(년3%)
//  메소드 : 입금(+100), 출금(-100), 이자계산(1년후 잔액), 잔액조회

class TossAccount {
    private int account = 1234;
    private String name = "홍길동";
    private int total = 1000;
    private double interest = total*0.03;

    // 입금
    void deposit(int balance) {
        int result = total + balance;
        System.out.println(result);

    }

    // 출금
    void withdraw(int balance) {
        int result = total - balance;
        System.out.println(result);

    }

    // 이자계산 (1년 후 잔액)
    void totalInterest() {
        double result = total + interest;
        System.out.println(result);

    }

    // 잔액조회
    void resultTotal() {
        int result = total;
        System.out.println(result);
    }

    // Getter
    public int getAccount() {
        return account;
    }

    public String getName() {
        return name;
    }

    public int getTotal() {
        return total;
    }

    public double getInterest() {
        return interest;
    }

    // Setter
    public void setAccount(int account) {
        this.account = account;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public void setInterest(double interest) {
        this.interest = interest;
    }

    private static TossAccount singleton;
    static TossAccount getInstance() {
        if(singleton == null) {
            singleton = new TossAccount();
        }
        return singleton;
    }
}

public class Ex26 {
    public static void main(String[] args) {
        //싱글톤을 호출후
        //1. 입금 메소드 호출
        //2. 출금 메소드 호출
        //3. 이자계산은 이자율을 읽어서 참조한다.
        //   이자계산후 잔액 증가한다.
        //4. 최종 잔액을 출력한다.

        TossAccount toss = TossAccount.getInstance();
        toss.deposit(25000);
        toss.resultTotal();
        toss.withdraw(10000);
        toss.resultTotal();
        toss.totalInterest();
    }
}

/* 강사님 코드
* //연습문제 - 싱글톤 만들기
//클래스 이름 : TossAccount
//  필드(private) : 계좌번호(1234), 고객이름(홍길동), 잔액(1000), 이자율(년3%)
//  메소드 : 입금(+100), 출금(-100), 이자계산(1년후 잔액), 잔액조회
class TossAccount {
    private int account = 1234;
    private String name = "홍길동";
    private double balance = 1000;
    private double rate = 0.03;
    private static TossAccount singleton;

    static TossAccount getInstance(){
        if(singleton == null) {
            singleton = new TossAccount();
        }
        return singleton;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAccount() {
        return account;
    }

    public void setAccount(int account) {
        this.account = account;
    }

    public void income(int balance) {
        this.balance += balance;
    }
    public void outcome(int balance){
        this.balance -= balance;
    }
    public void rebalance(){
        this.balance *= (1 + this.rate);
    }
}

public class ex26 {
    public static void main(String[] args) {
        //싱글톤을 호출후
        //1. 입금 메소드 호출
        //2. 출금 메소드 호출
        //3. 이자계산은 이자율을 읽어서 참조한다.
        //   이자계산후 잔액 증가한다.
        //4. 최종 잔액을 출력한다.
        TossAccount tossAccount = TossAccount.getInstance();
        tossAccount.income(100);
        tossAccount.outcome(100);
        tossAccount.rebalance();
        System.out.println("잔액:" + tossAccount.getBalance());

    }
}

* */