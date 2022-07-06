package src.main.java.com.keysoft.soap;

import src.main.java.com.keysoft.soap.dataaccess.webservicesserver.NumberConversion;

public class NumberToWordClient {
    public static void main(String[] args) throws Exception {
        NumberConversion numberService = new NumberConversion();
        System.out.println(numberService.getNumberConversionSoap().numberToWords(2931));
    }
}
