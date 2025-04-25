// Global data structures
const productFees = {
    "Centric": {
        adminFee: function(totalBalance) {
            // Example tiered fee structure
            if (totalBalance <= 250000) {
                return totalBalance * 0.0026;
            } else if (totalBalance <= 500000) {
                return 250000 * 0.0026 + (totalBalance - 250000) * 0.0021;
            } else if (totalBalance <= 1000000) {
                return 250000 * 0.0026 + 250000 * 0.0021 + (totalBalance - 500000) * 0.0015;
            } else if (totalBalance <= 2000000) {
                return 250000 * 0.0026 + 250000 * 0.0021 + 500000 * 0.0015 + (totalBalance - 1000000) * 0.0010;
            } else {
                return 250000 * 0.0026 + 250000 * 0.0021 + 500000 * 0.0015 + 1000000 * 0.0010 + (totalBalance - 2000000) * 0.0005;
            }
        },
        trusteeFee: function(totalBalance) {
            return totalBalance * 0.0002;
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.00003;
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        cashRateInvestment: 0.043,
        cashRateSuper: 0.042
    },
    "Centric PostOct": {
        adminFee: function(totalBalance) {
            // Post October fee structure may differ
            if (totalBalance <= 250000) {
                return totalBalance * 0.0028;
            } else if (totalBalance <= 500000) {
                return 250000 * 0.0028 + (totalBalance - 250000) * 0.0023;
            } else if (totalBalance <= 1000000) {
                return 250000 * 0.0028 + 250000 * 0.0023 + (totalBalance - 500000) * 0.0017;
            } else if (totalBalance <= 2000000) {
                return 250000 * 0.0028 + 250000 * 0.0023 + 500000 * 0.0017 + (totalBalance - 1000000) * 0.0012;
            } else {
                return 250000 * 0.0028 + 250000 * 0.0023 + 500000 * 0.0017 + 1000000 * 0.0012 + (totalBalance - 2000000) * 0.0007;
            }
        },
        trusteeFee: function(totalBalance) {
            return totalBalance * 0.0002;
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.00003;
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        cashRateInvestment: 0.043,
        cashRateSuper: 0.042
    },
    "Centric One": {
        adminFee: function(totalBalance) {
            return totalBalance * 0.002583;
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        expenseFee: function(totalBalance) {
            return 0; // N/A
        },
        cashRateInvestment: 0, // N/A
        cashRateSuper: 0.042
    },
    "Centric One Post Oct": {
        adminFee: function(totalBalance) {
            return totalBalance * 0.002833;
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        expenseFee: function(totalBalance) {
            return 0; // N/A
        },
        cashRateInvestment: 0, // N/A
        cashRateSuper: 0.042
    },
    "BT Panorama (Compact Menu)": {
        adminFee: function(totalBalance) {
            if (totalBalance > 1000000) {
                return 1500; // Flat fee for balances over $1M
            } else {
                let baseFee = 0;
                // Tiered fee structure
                if (totalBalance <= 100000) {
                    baseFee = totalBalance * 0.0015;
                } else if (totalBalance <= 250000) {
                    baseFee = 100000 * 0.0015 + (totalBalance - 100000) * 0.0013;
                } else if (totalBalance <= 500000) {
                    baseFee = 100000 * 0.0015 + 150000 * 0.0013 + (totalBalance - 250000) * 0.0008;
                } else if (totalBalance <= 750000) {
                    baseFee = 100000 * 0.0015 + 150000 * 0.0013 + 250000 * 0.0008 + (totalBalance - 500000) * 0.0005;
                } else {
                    baseFee = 100000 * 0.0015 + 150000 * 0.0013 + 250000 * 0.0008 + 250000 * 0.0005 + (totalBalance - 750000) * 0.0002;
                }
                return baseFee;
            }
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.00005;
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0003;
        },
        cashRateInvestment: 0.0335,
        cashRateSuper: 0.0335
    },
    "BT Panorama (Full Menu)": {
        adminFee: function(totalBalance) {
            if (totalBalance > 1000000) {
                return 1500; // Flat fee for balances over $1M
            } else {
                let baseFee = 0;
                // Tiered fee structure
                if (totalBalance <= 100000) {
                    baseFee = totalBalance * 0.0020;
                } else if (totalBalance <= 250000) {
                    baseFee = 100000 * 0.0020 + (totalBalance - 100000) * 0.0017;
                } else if (totalBalance <= 500000) {
                    baseFee = 100000 * 0.0020 + 150000 * 0.0017 + (totalBalance - 250000) * 0.0012;
                } else if (totalBalance <= 750000) {
                    baseFee = 100000 * 0.0020 + 150000 * 0.0017 + 250000 * 0.0012 + (totalBalance - 500000) * 0.0007;
                } else {
                    baseFee = 100000 * 0.0020 + 150000 * 0.0017 + 250000 * 0.0012 + 250000 * 0.0007 + (totalBalance - 750000) * 0.0003;
                }
                return baseFee;
            }
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.00005;
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0003;
        },
        cashRateInvestment: 0.0335,
        cashRateSuper: 0.0335
    },
    "LifeFocus Private": {
        adminFee: function(totalBalance) {
            // Tiered fee structure
            let fee = 0;
            if (totalBalance <= 100000) {
                fee += totalBalance * 0.00902;
            } else if (totalBalance <= 250000) {
                fee += 100000 * 0.00902 + (Math.min(totalBalance, 250000) - 100000) * 0.00779;
            } else if (totalBalance <= 500000) {
                fee += 100000 * 0.00902 + 150000 * 0.00779 + (Math.min(totalBalance, 500000) - 250000) * 0.00574;
            } else if (totalBalance <= 1000000) {
                fee += 100000 * 0.00902 + 150000 * 0.00779 + 250000 * 0.00574 + (Math.min(totalBalance, 1000000) - 500000) * 0.00369;
            } else if (totalBalance <= 3000000) {
                fee += 100000 * 0.00902 + 150000 * 0.00779 + 250000 * 0.00574 + 500000 * 0.00369 + (Math.min(totalBalance, 3000000) - 1000000) * 0.00164;
            } else {
                fee += 100000 * 0.00902 + 150000 * 0.00779 + 250000 * 0.00574 + 500000 * 0.00369 + 2000000 * 0.00164 + (totalBalance - 3000000) * 0.00082;
            }
            return fee;
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return 0; // N/A
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        cashRateInvestment: 0.031,
        cashRateSuper: 0.0335
    },
    "LifeFocus Wholesale": {
        adminFee: function(totalBalance) {
            // Flat fee structure for wholesale
            return totalBalance * 0.002563;
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return 0; // N/A
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        cashRateInvestment: 0.031,
        cashRateSuper: 0.0335
    },
    "Portfolio Solutions": {
        adminFee: function(totalBalance) {
            // Check if super/pension accounts exceed $1M
            if (totalBalance >= 1000000) {
                return 2125; // Flat fee for balances over $1M
            }
            
            // Tiered fee structure
            let fee = 0;
            if (totalBalance <= 84000) {
                fee += totalBalance * 0.008929;
            } else if (totalBalance <= 300000) {
                fee += 84000 * 0.008929 + (Math.min(totalBalance, 300000) - 84000) * 0.00625;
            } else if (totalBalance <= 500000) {
                fee += 84000 * 0.008929 + 216000 * 0.00625 + (Math.min(totalBalance, 500000) - 300000) * 0.00375;
            } else if (totalBalance <= 1000000) {
                fee += 84000 * 0.008929 + 216000 * 0.00625 + 200000 * 0.00375 + (Math.min(totalBalance, 1000000) - 500000) * 0.00225;
            } else if (totalBalance <= 3000000) {
                fee += 84000 * 0.008929 + 216000 * 0.00625 + 200000 * 0.00375 + 500000 * 0.00225 + (Math.min(totalBalance, 3000000) - 1000000) * 0.00075;
            } else {
                fee += 84000 * 0.008929 + 216000 * 0.00625 + 200000 * 0.00375 + 500000 * 0.00225 + 2000000 * 0.00075 + (totalBalance - 3000000) * 0.0005;
            }
            return fee;
        },
        trusteeFee: function(totalBalance) {
            return 0; // N/A
        },
        orfrFee: function(totalBalance) {
            return totalBalance * 0.00003;
        },
        expenseFee: function(totalBalance) {
            return totalBalance * 0.0001;
        },
        cashRateInvestment: 0.031,
        cashRateSuper: 0.0335
    }
};

// Show active tab
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to the clicked tab
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Calculate total invested balance
function calculateInvestedBalance() {
    const columns = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
    
    columns.forEach(col => {
        const balance = parseFloat(document.getElementById(`balance-${col}5`)?.value || 0);
        const cash = parseFloat(document.getElementById(`cash-${col}6`)?.value || 0);
        const invested = balance - cash;
        
        document.getElementById(`invested-${col}7`).textContent = invested.toFixed(2);
    });
}

// Calculate number of accounts
function calculateAccounts() {
    const columns = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
    
    columns.forEach(col => {
        const balance = parseFloat(document.getElementById(`balance-${col}5`)?.value || 0);
        const accounts = balance > 0 ? 1 : 0;
        
        document.getElementById(`accounts-${col}10`).textContent = accounts;
    });
}

// Calculate platform fees
function calculatePlatformFees() {
    // Get current platform fees from Misc Data
    const currentAdminFee = parseFloat(document.getElementById('misc-admin-fee')?.value || 0);
    const currentTrusteeFee = parseFloat(document.getElementById('misc-trustee-fee')?.value || 0);
    const currentORFRFee = parseFloat(document.getElementById('misc-orfr-fee')?.value || 0);
    const currentExpenseFee = parseFloat(document.getElementById('misc-expense-fee')?.value || 0);
    
    // Display current fees
    document.getElementById('current-admin-fee').textContent = currentAdminFee.toFixed(2);
    document.getElementById('current-trustee-fee').textContent = currentTrusteeFee.toFixed(2);
    document.getElementById('current-orfr-fee').textContent = currentORFRFee.toFixed(2);
    document.getElementById('current-expense-fee').textContent = currentExpenseFee.toFixed(2);
    document.getElementById('current-total-fee').textContent = (currentAdminFee + currentTrusteeFee + currentORFRFee + currentExpenseFee).toFixed(2);
    
    // Calculate total balances for each product type
    const products = [
        "Centric", "Centric One", "BT Panorama (Compact Menu)", 
        "BT Panorama (Full Menu)", "LifeFocus Private", 
        "LifeFocus Wholesale", "Portfolio Solutions"
    ];
    
    const productBalances = {};
    const idpsBalances = {};
    const superBalances = {};
    
    products.forEach(product => {
        productBalances[product] = 0;
        idpsBalances[product] = 0;
        superBalances[product] = 0;
    });
    
    // Calculate total balances for each product type
    const columns = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
    
    columns.forEach(col => {
        const product = document.getElementById(`product-${col}4`)?.value || "";
        const balance = parseFloat(document.getElementById(`balance-${col}5`)?.value || 0);
        
        if (product && balance > 0) {
            // Get the proper product name for fee calculation
            let productKey = product;
            if (product === "Centric Post Oct") productKey = "Centric PostOct";
            if (product === "Centric One Post Oct") productKey = "Centric One Post Oct";
            
            productBalances[productKey] = (productBalances[productKey] || 0) + balance;
            
            // Separate IDPS and Super/Pension balances
            if (['b', 'c', 'd', 'e', 'f', 'g'].includes(col)) {
                idpsBalances[productKey] = (idpsBalances[productKey] || 0) + balance;
            } else if (['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'].includes(col)) {
                superBalances[productKey] = (superBalances[productKey] || 0) + balance;
            }
        }
    });
    
    // Calculate fees for each product
    const productKeys = Object.keys(productFees);
    
    productKeys.forEach(product => {
        if (productBalances[product] > 0) {
            let adminFee = 0;
            let trusteeFee = 0;
            let orfrFee = 0;
            let expenseFee = 0;
            
            // Calculate fees based on total balances
            adminFee = productFees[product].adminFee(productBalances[product]);
            trusteeFee = productFees[product].trusteeFee(superBalances[product]);
            orfrFee = productFees[product].orfrFee(superBalances[product]);
            expenseFee = productFees[product].expenseFee(productBalances[product]);
            
            // Display calculated fees
            const productId = product.replace(/\s+/g, '-').replace(/\(/g, '').replace(/\)/g, '').toLowerCase();
            
            document.getElementById(`${productId}-admin-fee`).textContent = adminFee.toFixed(2);
            
            if (product === "Centric" || product === "Centric PostOct") {
                document.getElementById(`${productId}-trustee-fee`).textContent = trusteeFee.toFixed(2);
            }
            
            if (product === "Centric" || product === "Centric PostOct" || 
                product === "Centric One" || product === "Centric One Post Oct" || 
                product === "BT Panorama (Compact Menu)" || product === "BT Panorama (Full Menu)" || 
                product === "Portfolio Solutions") {
                document.getElementById(`${productId}-orfr-fee`).textContent = orfrFee.toFixed(2);
            }
            
            if (product === "Centric" || product === "Centric PostOct" || 
                product === "BT Panorama (Compact Menu)" || product === "BT Panorama (Full Menu)" || 
                product === "LifeFocus Private" || product === "LifeFocus Wholesale" || 
                product === "Portfolio Solutions") {
                document.getElementById(`${productId}-expense-fee`).textContent = expenseFee.toFixed(2);
            }
            
            // Calculate total fee
            const totalFee = adminFee + trusteeFee + orfrFee + expenseFee;
            document.getElementById(`${productId}-total-fee`).textContent = totalFee.toFixed(2);
        }
    });
}

// Calculate cash account earnings
function calculateCashEarnings() {
    // Get current cash rates from Misc Data
    const currentCashRateInvestment = parseFloat(document.getElementById('misc-cash-rate-investment')?.value || 0);
    const currentCashRateSuper = parseFloat(document.getElementById('misc-cash-rate-super')?.value || 0);
    
    // Display current cash rates
    document.getElementById('current-cash-rate-investment').textContent = (currentCashRateInvestment * 100).toFixed(2);
    document.getElementById('current-cash-rate-super').textContent = (currentCashRateSuper * 100).toFixed(2);
    
    // Calculate total cash balances
    let totalIdpsCash = 0;
    let totalSuperCash = 0;
    
    // IDPS accounts
    for (const col of ['b', 'c', 'd', 'e', 'f', 'g']) {
        totalIdpsCash += parseFloat(document.getElementById(`cash-${col}6`)?.value || 0);
    }
    
    // Super/Pension accounts
    for (const col of ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']) {
        totalSuperCash += parseFloat(document.getElementById(`cash-${col}6`)?.value || 0);
    }
    
    // Calculate current gross earnings
    const currentGrossEarnings = (totalIdpsCash * currentCashRateInvestment) + (totalSuperCash * currentCashRateSuper);
    document.getElementById('current-gross-earnings').textContent = currentGrossEarnings.toFixed(2);
    document.getElementById('current-net-earnings').textContent = currentGrossEarnings.toFixed(2);
    
    // Calculate proposed cash earnings for each product
    const products = [
        "Centric", "Centric One", "BT Panorama (Compact Menu)", 
        "BT Panorama (Full Menu)", "LifeFocus Private", 
        "LifeFocus Wholesale", "Portfolio Solutions"
    ];
    
    products.forEach(product => {
        const productKey = product.replace(/\s+/g, '-').replace(/\(/g, '').replace(/\)/g, '').toLowerCase();
        const cashRateInvestment = productFees[product].cashRateInvestment;
        const cashRateSuper = productFees[product].cashRateSuper;
        
        const grossEarnings = (totalIdpsCash * cashRateInvestment) + (totalSuperCash * cashRateSuper);
        document.getElementById(`${productKey}-gross-earnings`).textContent = grossEarnings.toFixed(2);
        document.getElementById(`${productKey}-net-earnings`).textContent = grossEarnings.toFixed(2);
    });
}

// Calculate ABP Reset values
function calculateABP() {
    // Get input values
    const pension = parseFloat(document.getElementById('abp-b3').value || 0);
    const purchasePrice = parseFloat(document.getElementById('abp-b4').value || 0);
    const lumpSum = parseFloat(document.getElementById('abp-b5').value || 0);
    const relevantNumber = parseFloat(document.getElementById('abp-b6').value || 0);
    
    // Calculate deductible amount
    const deductibleAmount = (purchasePrice - lumpSum) / relevantNumber;
    document.getElementById('abp-b7').textContent = deductibleAmount.toFixed(2);
    
    // Asset values
    const d8 = parseFloat(document.getElementById('abp-d8').value || 0);
    document.getElementById('abp-g3').textContent = d8;
    
    const g4 = parseFloat(document.getElementById('abp-g4').value || 0);
    const g5 = parseFloat(document.getElementById('abp-g5').value || 0);
    const g6 = parseFloat(document.getElementById('abp-g6').value || 0);
    const g7 = parseFloat(document.getElementById('abp-g7').value || 0);
    
    // Calculate total assets
    const totalAssets = d8 + g4 + g5 + g6 + g7;
    document.getElementById('abp-g11').textContent = totalAssets.toFixed(2);
    
    // Income test assessable
    // Need more information on calculations for c9, d9, c10, and d10
    // Placeholder values for now
    document.getElementById('abp-b9').textContent = (pension - deductibleAmount).toFixed(2);
    document.getElementById('abp-c9').textContent = "0.00";
    document.getElementById('abp-d9').textContent = "0.00";
    document.getElementById('abp-c10').textContent = "0.00";
    document.getElementById('abp-d10').textContent = "0.00";
}

// Main calculation function
function calculate() {
    calculateInvestedBalance();
    calculateAccounts();
    calculatePlatformFees();
    calculateCashEarnings();
    
    // Update for TCR sheets if needed
    // This would handle custom model portfolio calculations
}

// Initialize the form when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set default values for Misc Data
    document.getElementById('misc-admin-fee').value = 200;
    document.getElementById('misc-trustee-fee').value = 50;
    document.getElementById('misc-orfr-fee').value = 20;
    document.getElementById('misc-expense-fee').value = 30;
    document.getElementById('misc-cash-rate-investment').value = 0.03;
    document.getElementById('misc-cash-rate-super').value = 0.03;
    
    // Perform initial calculations
    calculate();
    calculateABP();
});
