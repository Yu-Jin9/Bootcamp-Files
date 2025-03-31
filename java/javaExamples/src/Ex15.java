public class Ex15 {
    public static void main(String[] args) {
        // 일차 반복문 => 일차 배열에 사용
        // 이차 반복문 => 이차 배열에 사용
        
        // 이중 반복문
        for(int i=0; i<5; i++) {
            for(int j=0; j<5; j++) {
                System.out.println(i+", "+j);
            }
        }

        
        int[][] num = {{1,2}, {3,4}};
        for(int i=0; i<2; i++) {
            for(int j=0; j<2; j++) {
                System.out.println(num[i][j]);
            }
        }

        // 별찍기
        // *****
        // *****
        // *****
        // *****
        // *****

        for(int i =0; i<5; i++) {
            for(int j=0; j<5; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        //출력 예)
        //    *     공백 4 별 1
        //   **     공백 3 별 2
        //  ***     공백 2 별 3
        // ****     공백 1 별 4
        //*****     공백 0 별 5

        for(int i=0; i<5; i++) {
            for(int j=0; j<5-i; j++) {
                System.out.print(" ");
            }
            for(int k =0; k<i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }


        //출력 예)
        //*******  // *=7
        //*    **
        //*   * *
        //*  *  *
        //* *   *
        //**    *
        //*******
        for(int i=0; i<7; i++) {
            if(i==1 || i==6) {
                for(int j=0; j<6; j++){
                    System.out.print("*");
                }
            } else {

            }
            System.out.println();
        }

        int n = 7;
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if( i==0 || i == n-1 ){ //첫행 마지막행
                    System.out.print("*");
                }
                else if( j==0 || j == n-1 ){ //중간행
                    System.out.print("*");
                }else if(n-1-i == j) { //대각선
                    System.out.print("*");
                }else{
                    System.out.print(" ");//그외
                }
            }
            System.out.println();
        }

        System.out.println("*******");
        for (int i = 1; i < 6; i++) {
            String star = "*";
            for (int j = 1; j < 6; j++) {
                if ((6-i) == j){
                    star += "*";
                }
                else {
                    star += " ";
                }
            }
            star += "*";
            System.out.println(star);
        }
        System.out.println("*******");

    }
}
