//
//  ViewController.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import UIKit

class VC_Login: UIViewController {
    @IBOutlet weak var username: UITextField!
    @IBOutlet weak var password: UITextField!
    @IBOutlet weak var login: UIButton!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    @IBOutlet weak var centerConstraint: NSLayoutConstraint!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        activityIndicator.stopAnimating()
        activityIndicator.isHidden = true
        initializeHideKeyboard()
}
    
    @IBAction func loginAction(_ sender: Any) {
        activityIndicator.isHidden = false
        activityIndicator.startAnimating()
        _ = Timer.scheduledTimer(withTimeInterval: 1, repeats: false) { timer in
            self.performSegue(withIdentifier: "showMain", sender: nil)
        }
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(true, animated: animated)
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        navigationController?.setNavigationBarHidden(false, animated: animated)
    }
}

extension VC_Login {
     func initializeHideKeyboard(){
        let tap: UITapGestureRecognizer = UITapGestureRecognizer(
            target: self,
            action: #selector(dismissMyKeyboard))
        
        view.addGestureRecognizer(tap)
    }
    
    @objc func dismissMyKeyboard(){
        view.endEditing(true)
    }
}
