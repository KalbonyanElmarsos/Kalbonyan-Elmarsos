//
//  ViewController.swift
//  programming-jokes
//
//  Created by Kesha Williams on 12/20/18.
//  Copyright © 2018 Kesha Williams. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var jokeSetupUILabel: UILabel!
    @IBOutlet weak var jokePunchLineUILabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    @IBAction func displayJokeAction(_ sender: Any) {
        let url = URL(string: "https://official-joke-api.herokuapp.com/random_joke")
        var request = URLRequest(url: url!)
        request.httpMethod = "GET"
        
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
            // make sure we got data
            guard let responseData = data else {
                print("Error: did not receive data")
                return
            }
            
            //convert the web service response to a NSDictionary
            let jsonDictionary = try! JSONSerialization.jsonObject(with: responseData, options: []) as! NSDictionary
            let setup = jsonDictionary["setup"] as! String
            let punchline = jsonDictionary["punchline"] as! String
            
            //update by adding back to the main thread
            DispatchQueue.main.async(execute: {
                self.jokeSetupUILabel.text = setup
                
                _ = Timer.scheduledTimer(withTimeInterval: 5.0, repeats: false) { (timer) in
                    self.jokePunchLineUILabel.text = punchline
                }
                
                //clear the fields
                _ = Timer.scheduledTimer(withTimeInterval: 10.0, repeats: false) { (timer) in
                    self.jokeSetupUILabel.text = nil
                    self.jokePunchLineUILabel.text = nil
                    
                }
                
            })
    
        }
        
        task.resume()
    }
    
}

