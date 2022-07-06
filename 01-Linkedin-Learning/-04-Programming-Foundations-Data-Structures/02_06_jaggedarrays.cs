using System;

class Program
{
    static void Main()
    {
        int[][] jagged = new int[3][];
        
        // Set row 0
        jagged[0] = new int[2];
        jagged[0][0] = 8;
        jagged[0][1] = 10;
        
        // Set row 1
        jagged[1] = new int[9];
        
        // Set row 2
        jagged[2] = new int[4] {20, 30, 40, 50};
        
        Console.WriteLine("At row, col 0: " + jagged[2][0]);
    }
}
