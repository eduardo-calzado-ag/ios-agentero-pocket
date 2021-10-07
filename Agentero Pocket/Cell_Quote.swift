//
//  Cell_Quote.swift
//  Agentero Pocket
//
//  Created by Edu on 7/10/21.
//

import Foundation
import UIKit

class Cell_Quote: UITableViewCell {
    
    @IBOutlet weak var cell_view: UIView!
    @IBOutlet weak var carrier: UILabel!
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var insurancetype: UILabel!
    @IBOutlet weak var price: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }
}
