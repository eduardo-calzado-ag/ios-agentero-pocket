//
//  VC_Master.swift
//  Agentero
//
//  Created by Agentero on 18/10/2018.
//  Copyright © 2018 Agentero. All rights reserved.
//

import Foundation
import UIKit

class TC_Main: UITabBarController {
    enum TabType: Int {
        case home = 0
        case account = 1
    }
}

// #MARK: UITabBarControllerDelegate
extension TC_Main: UITabBarControllerDelegate {
    func tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController) {
        if let selectedTab = TabType(rawValue: tabBarController.selectedIndex) {
            switch selectedTab {
            case .home:
                print(selectedTab.rawValue)
            case .account:
                print(selectedTab.rawValue)
            }
            print("TC_Main.didSelect | selectedTab: \(selectedTab)")
        }
    }
}

// -- lifecycle
extension TC_Main {
    override func viewDidLoad() {
        super.viewDidLoad()
        if #available(iOS 13.0, *) {
            overrideUserInterfaceStyle = .light
        }
        view.backgroundColor = UIColor.white
        delegate = self
        NSLayoutConstraint.activate([
            tabBar.heightAnchor.constraint(equalToConstant: 49),
            tabBar.leftAnchor.constraint(equalTo: view.leftAnchor),
            tabBar.rightAnchor.constraint(equalTo: view.rightAnchor),
            tabBar.bottomAnchor.constraint(equalTo: view.bottomAnchor),
        ])
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.leftBarButtonItem=nil;
        self.navigationItem.setHidesBackButton(true, animated: true)

    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }

    override var shouldAutorotate: Bool {
        return true
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return UIInterfaceOrientationMask.portrait
    }
}
