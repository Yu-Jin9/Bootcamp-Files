import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Ex48 {
    public static void main(String[] args) {
        
        // try - with - resources 문 : JDK 7 버전 이상
        try(FileWriter file = new FileWriter("data.txt")) {
            file.write("안녕하세요~");
        }
        catch (IOException e){
            e.printStackTrace();
        }

        try(FileReader file = new FileReader("data.txt")) {
            int data = 0;
            do {
                data = file.read();
                if( data != -1 ){   // data를 못 읽어온 경우 -1
                    System.out.print((char)data);
                }
            }
            while ( data != -1 ); //End Of File
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }
}