import java.util.Scanner;
public class code{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // The given string
        String s = scanner.next();
        
        // Characters to remove
        String charsToRemove = "STRUCTURAL";
        
        // Using replaceAll to remove occurrences of characters in charsToRemove
        for (char c : charsToRemove.toCharArray()) {
            s = s.replace(String.valueOf(c), "");
        }
        
        // Output the resultant string
        System.out.println(s);
        
        scanner.close();
    }
}

