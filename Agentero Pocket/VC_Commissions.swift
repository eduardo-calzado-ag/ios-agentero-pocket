//
//  VC_Commissions.swift
//  Agentero Pocket
//
//  Created by Edu on 6/10/21.
//

import Foundation
import UIKit

class VC_Commissions: UIViewController {
    @IBOutlet weak var tableView: UITableView!
    var commissionsArray = [O_Commission]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("VC_Commissions.viewDidLoad | hello!")
        
        self.title = "Commissions"
        self.navigationItem.backButtonTitle = "Back"
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
        let o1 = O_Commission(period: "December, 2021", commission: "$222")
        let o2 = O_Commission(period: "November, 2021", commission: "$456")
        let o3 = O_Commission(period: "September, 2021", commission: "$45,454")
        let o4 = O_Commission(period: "April, 2021", commission: "$2,222")
        let o5 = O_Commission(period: "March, 2021", commission: "$200")
        let o6 = O_Commission(period: "February, 2021", commission: "$1,000")
        let o7 = O_Commission(period: "January, 2021", commission: "$-21,578")
        let o8 = O_Commission(period: "December, 2020", commission: "$197.90")
        let o9 = O_Commission(period: "October, 2020", commission: "$0")
        let o10 = O_Commission(period: "July, 2020", commission: "$50")
        let o11 = O_Commission(period: "January, 2020", commission: "$234")
        let o12 = O_Commission(period: "January, 2020", commission: "$10")
        let o13 = O_Commission(period: "January, 2018", commission: "$2")
        
        commissionsArray = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13]
    }
}

extension VC_Commissions: UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return commissionsArray.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell:Cell_Commissions = self.tableView.dequeueReusableCell(withIdentifier: "cell_commissions") as! Cell_Commissions
        if let com = commissionsArray[indexPath.row] as? O_Commission{
            cell.date.text = com.period
            cell.price.text = com.commission
        }
        return cell
    }
}
