import React, { useState } from "react";

export default function FinanceApp() {
  // --- NAVIGATION STATE ---
  const [activeTab, setActiveTab] = useState("dashboard"); // Options: 'dashboard', 'transactions', 'settings'

  // --- SECURITY / AUTH STATES ---
  const [password, setPassword] = useState("1234"); // Default initial pin/password
  const [isLocked, setIsLocked] = useState(true);
  const [enteredPin, setEnteredPin] = useState("");
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");

  // --- ACCOUNTS DATA STATES (Encapsulated) ---
  const [accountHolder, setAccountHolder] = useState("Degife Tise");
  const [checkingBalance, setCheckingBalance] = useState(5430.50);
  const [savingsBalance, setSavingsBalance] = useState(12850.00);
  
  // Transaction Inputs
  const [checkingInput, setCheckingInput] = useState("");
  const [savingsInput, setSavingsInput] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([
    { id: 1, account: "Checking", type: "Deposit", amount: 1500, date: "2026-06-24" },
    { id: 2, account: "Savings", type: "Withdrawal", amount: 3000, date: "2026-06-25" },
  ]);

  // Constants
  const TRANSACTION_FEE = 5.0;
  const INTEREST_RATE = 0.07;

  // --- CORE BUSINESS FUNCTIONS ---
  const logTransaction = (account, type, amount) => {
    const today = new Date().toISOString().split('T')[0];
    setTransactionHistory((prev) => [
      { id: Date.now(), account, type, amount, date: today },
      ...prev,
    ]);
  };

  const handleVerifyUnlock = (e) => {
    e.preventDefault();
    if (enteredPin === password) {
      setIsLocked(false);
      setEnteredPin("");
    } else {
      alert("Incorrect Access Code! Please try again.");
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (currentPasswordInput !== password) {
      alert("Current password verification failed.");
      return;
    }
    if (newPasswordInput.trim().length < 4) {
      alert("New password must be at least 4 characters long.");
      return;
    }
    setPassword(newPasswordInput);
    setCurrentPasswordInput("");
    setNewPasswordInput("");
    alert("Password updated successfully!");
  };

  // Checking Handlers
  const handleCheckingDeposit = () => {
    const amt = parseFloat(checkingInput);
    if (amt > 0) {
      setCheckingBalance(prev => prev + amt);
      logTransaction("Checking", "Deposit", amt);
      setCheckingInput("");
    }
  };

  const handleCheckingWithdraw = () => {
    const amt = parseFloat(checkingInput);
    const total = amt + TRANSACTION_FEE;
    if (amt > 0 && total <= checkingBalance) {
      setCheckingBalance(prev => prev - total);
      logTransaction("Checking", "Withdrawal (with Fee)", amt);
      setCheckingInput("");
    } else {
      alert("Insufficient funds or invalid transaction.");
    }
  };

  // Savings Handlers
  const handleSavingsDeposit = () => {
    const amt = parseFloat(savingsInput);
    if (amt > 0) {
      setSavingsBalance(prev => prev + amt);
      logTransaction("Savings", "Deposit", amt);
      setSavingsInput("");
    }
  };

  const handleSavingsWithdraw = () => {
    const amt = parseFloat(savingsInput);
    if (amt > 0 && amt <= savingsBalance) {
      setSavingsBalance(prev => prev - amt);
      logTransaction("Savings", "Withdrawal", amt);
      setSavingsInput("");
    } else {
      alert("Insufficient Savings funds.");
    }
  };

  const handleApplyInterest = () => {
    const yieldAmt = savingsBalance * INTEREST_RATE;
    setSavingsBalance(prev => prev + yieldAmt);
    logTransaction("Savings", "Interest Earned", yieldAmt);
    alert(`Applied interest growth of ${yieldAmt.toFixed(2)} ETB!`);
  };

  // ==========================================
  // SCREEN MATRIX: LOCK SCREEN
  // ==========================================
  if (isLocked) {
    return (
      <div style={styles.lockContainer}>
        <div style={styles.lockCard}>
          <div style={{ fontSize: "50px", marginBottom: "15px" }}>🔒</div>
          <h2 style={{ color: "#1a365d", margin: "0 0 10px 0" }}>App Locked</h2>
          <p style={{ color: "#718096", fontSize: "14px", marginBottom: "20px" }}>
            Enter your access code to access your balance statements. <br/>
            <strong>(Default is 1234)</strong>
          </p>
          <form onSubmit={handleVerifyUnlock}>
            <input
              type="password"
              placeholder="••••"
              value={enteredPin}
              onChange={(e) => setEnteredPin(e.target.value)}
              style={{ ...styles.input, textAlign: "center", fontSize: "20px", letterSpacing: "5px" }}
              maxLength={10}
            />
            <button type="submit" style={styles.primaryButton}>Unlock Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

 
  return (
    <div style={styles.appWrapper}>
      
      {/* 1. SIDEBAR NAVIGATION */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarBrand}>🏛️ Horizon Finance</div>
        <div style={styles.userBadge}>
          <div style={styles.avatar}>{accountHolder.charAt(0)}</div>
          <div>
            <div style={styles.userName}>{accountHolder}</div>
            <div style={styles.userRole}>Premium Account</div>
          </div>
        </div>
        
        <nav style={styles.navMenu}>
          <button 
            onClick={() => setActiveTab("dashboard")} 
            style={{...styles.navItem, ...(activeTab === "dashboard" ? styles.activeNavItem : {})}}
          >
            📊 Dashboard Accounts
          </button>
          <button 
            onClick={() => setActiveTab("transactions")} 
            style={{...styles.navItem, ...(activeTab === "transactions" ? styles.activeNavItem : {})}}
          >
            📜 Transaction Logs
          </button>
          <button 
            onClick={() => setActiveTab("settings")} 
            style={{...styles.navItem, ...(activeTab === "settings" ? styles.activeNavItem : {})}}
          >
            ⚙️ Security Settings
          </button>
        </nav>

        <button onClick={() => setIsLocked(true)} style={styles.lockAppButton}>
          🔒 Lock Dashboard
        </button>
      </div>

      {/* 2. MAIN CONTENT STAGE AREA */}
      <div style={styles.mainContent}>
        
        {/* VIEW A: ACCOUNTS & TRANSACTIONS PANELS */}
        {activeTab === "dashboard" && (
          <div>
            <h1 style={styles.pageTitle}>Account Balances</h1>
            <div style={styles.grid}>
              
              {/* CHECKING ACCOUNT CARD */}
              <div style={styles.accountCard}>
                <div style={styles.cardHeader}>
                  <h3>Checking Account</h3>
                  <span style={styles.badge}>Active</span>
                </div>
                <div style={styles.balance}>{checkingBalance.toFixed(2)} <span style={{fontSize:'16px'}}>ETB</span></div>
                <p style={styles.feeNotice}>*Withdrawals incur a {TRANSACTION_FEE} ETB transaction fee.</p>
                
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={checkingInput}
                  onChange={(e) => setCheckingInput(e.target.value)}
                  style={styles.input}
                />
                <div style={styles.btnGroup}>
                  <button onClick={handleCheckingDeposit} style={styles.successBtn}>Deposit</button>
                  <button onClick={handleCheckingWithdraw} style={styles.dangerBtn}>Withdraw</button>
                </div>
              </div>

              {/* SAVINGS ACCOUNT CARD */}
              <div style={styles.accountCard}>
                <div style={styles.cardHeader}>
                  <h3>Savings Account</h3>
                  <span style={{...styles.badge, backgroundColor: '#ebf8ff', color: '#2b6cb0'}}>+7.0% APY</span>
                </div>
                <div style={styles.balance}>{savingsBalance.toFixed(2)} <span style={{fontSize:'16px'}}>ETB</span></div>
                <p style={styles.feeNotice}>Secure wallet targeted for yield growths.</p>
                
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={savingsInput}
                  onChange={(e) => setSavingsInput(e.target.value)}
                  style={styles.input}
                />
                <div style={styles.btnGroup}>
                  <button onClick={handleSavingsDeposit} style={styles.successBtn}>Deposit</button>
                  <button onClick={handleSavingsWithdraw} style={styles.dangerBtn}>Withdraw</button>
                </div>
                <button onClick={handleApplyInterest} style={styles.interestBtn}>
                  ⚡ Process Monthly Yield Interest
                </button>
              </div>

            </div>
          </div>
        )}

        {/* VIEW B: AUDIT TRANSACTION LOGS */}
        {activeTab === "transactions" && (
          <div>
            <h1 style={styles.pageTitle}>Transaction Audit Ledger</h1>
            <div style={styles.accountCard}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeaderRow}>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Account Blueprint</th>
                    <th style={styles.th}>Transaction Class</th>
                    <th style={styles.th}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((tx) => (
                    <tr key={tx.id} style={styles.tableRow}>
                      <td style={styles.td}>{tx.date}</td>
                      <td style={styles.td}><strong>{tx.account}</strong></td>
                      <td style={styles.td}>
                        <span style={{
                          padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold',
                          backgroundColor: tx.type.includes("Deposit") || tx.type.includes("Interest") ? "#def7ec" : "#fde8e8",
                          color: tx.type.includes("Deposit") || tx.type.includes("Interest") ? "#03543f" : "#9b1c1c"
                        }}>
                          {tx.type}
                        </span>
                      </td>
                      <td style={{...styles.td, fontWeight: 'bold'}}>
                        {tx.amount.toFixed(2)} ETB
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW C: SECURITY OPERATIONS PANEL */}
        {activeTab === "settings" && (
          <div>
            <h1 style={styles.pageTitle}>Account Security Parameters</h1>
            <div style={{...styles.accountCard, maxWidth: '500px'}}>
              <h3>🔄 Change Encryption Access Password</h3>
              <p style={{color: '#718096', fontSize: '13px', marginBottom: '20px'}}>
                Update the security gate password parameter required to unlock your finance panel views.
              </p>
              
              <form onSubmit={handleChangePassword}>
                <div style={{marginBottom: '15px'}}>
                  <label style={styles.formLabel}>Current Password / PIN:</label>
                  <input
                    type="password"
                    value={currentPasswordInput}
                    onChange={(e) => setCurrentPasswordInput(e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={{marginBottom: '20px'}}>
                  <label style={styles.formLabel}>New Password / PIN:</label>
                  <input
                    type="password"
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.primaryButton}>Update Security Key</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// --- APP UI MODERN INTERFACE CSS INLINE MATRIX ---
const styles = {
  lockContainer: { height: "100vh", backgroundColor: "#f7fafc", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "system-ui" },
  lockCard: { backgroundColor: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)", maxWidth: "400px", width: "100%", textAlign: "center" },
  appWrapper: { display: "flex", height: "100vh", backgroundColor: "#f7fafc", fontFamily: "system-ui, sans-serif" },
  sidebar: { width: "260px", backgroundColor: "#1a365d", color: "#fff", padding: "24px", display: "flex", flexDirection: "column" },
  sidebarBrand: { fontSize: "20px", fontWeight: "bold", paddingBottom: "24px", borderBottom: "1px solid #2d3748", marginBottom: "20px" },
  userBadge: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "30px" },
  avatar: { width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#4299e1", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", fontWeight: "bold" },
  userName: { fontSize: "15px", fontWeight: "600" },
  userRole: { fontSize: "12px", color: "#a0aec0" },
  navMenu: { display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 },
  navItem: { border: "none", background: "none", color: "#cbd5e0", padding: "12px 16px", borderRadius: "8px", textAlign: "left", cursor: "pointer", fontSize: "15px", display: "block", transition: "0.2s" },
  activeNavItem: { backgroundColor: "#2b6cb0", color: "#fff", fontWeight: "bold" },
  lockAppButton: { backgroundColor: "#ecc94b", color: "#1a202c", border: "none", padding: "10px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" },
  mainContent: { flexGrow: 1, padding: "40px", overflowY: "auto" },
  pageTitle: { fontSize: "24px", color: "#2d3748", margin: "0 0 25px 0" },
  grid: { display: "flex", gap: "25px", flexWrap: "wrap" },
  accountCard: { backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px", flex: "1", minWidth: "320px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", color: "#4a5568" },
  badge: { backgroundColor: "#def7ec", color: "#03543f", padding: "4px 8px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" },
  balance: { fontSize: "36px", fontWeight: "bold", color: "#1a202c", margin: "15px 0 5px 0" },
  feeNotice: { fontSize: "12px", color: "#a0aec0", margin: "0 0 20px 0" },
  input: { width: "100%", padding: "12px", border: "1px solid #cbd5e0", borderRadius: "8px", boxSizing: "border-box", fontSize: "15px", marginBottom: "15px" },
  btnGroup: { display: "flex", gap: "12px" },
  successBtn: { flex: 1, backgroundColor: "#48bb78", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  dangerBtn: { flex: 1, backgroundColor: "#f56565", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" },
  interestBtn: { width: "100%", marginTop: "12px", padding: "10px", backgroundColor: "#3182ce", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" },
  primaryButton: { width: "100%", backgroundColor: "#2b6cb0", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", fontSize: "15px" },
  formLabel: { display: "block", fontSize: "14px", fontWeight: "600", color: "#4a5568", marginBottom: "6px" },
  table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
  tableHeaderRow: { borderBottom: "2px solid #edf2f7" },
  th: { padding: "12px", color: "#718096", fontSize: "14px" },
  tableRow: { borderBottom: "1px solid #edf2f7", transition: "0.2s" },
  td: { padding: "16px 12px", fontSize: "15px", color: "#2d3748" }
};