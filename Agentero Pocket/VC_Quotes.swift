//
//  VC_QuoteProposal.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import Foundation
import UIKit

class VC_Quotes: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    var quotesArray = [O_Quote]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Quotes.viewDidLoad | hello!")
        
        self.title = "Quotes"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        
        tableView.delegate = self
        tableView.dataSource = self
        
        initData()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        self.tableView.contentInsetAdjustmentBehavior = .never
        self.navigationController?.navigationBar.sizeToFit()
    }
    
    func initData() {
        let o1 = O_Quote(carrier: "Clearcover", name: "Peter Bottle", insuranceType: "Personal Auto", price: "$ 956,90")
        let o2 = O_Quote(carrier: "Clearcover", name: "Tammy Bersch Tests", insuranceType: "Home", price: "$ 156,90")
        let o3 = O_Quote(carrier: "Clearcover", name: "Donna Hall", insuranceType: "Personal Auto", price: "$ 4,90")
        let o4 = O_Quote(carrier: "Clearcover", name: "James Orenski", insuranceType: "Personal Auto", price: "$ 46,90")
        let o5 = O_Quote(carrier: "Clearcover", name: "Minh Su", insuranceType: "Dwelling Fire", price: "$ 56,90")
        let o6 = O_Quote(carrier: "Clearcover", name: "John Doe", insuranceType: "Personal Auto", price: "$ 6,90")
        
        quotesArray = [o1, o2, o3, o4, o5, o6]
    }
}

extension VC_Quotes: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return quotesArray.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell:Cell_Quote = self.tableView.dequeueReusableCell(withIdentifier: "cell_quote") as! Cell_Quote
        if let q = quotesArray[indexPath.row] as? O_Quote{
            cell.carrier.text = q.carrier
            cell.insurancetype.text = q.insuranceType
            cell.name.text = q.name
            cell.price.text = q.price
        }
        return cell
    }
}


