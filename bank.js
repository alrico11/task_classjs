class BankAccount {
    noRek;
    saldo;
    setData(noRek,saldo){
        this.noRek = noRek
        this.saldo = saldo
        return saldo
    }
    deposit(value){
        return this.saldo += value 
    }
    tarik(value){
        if (this.saldo >= value){
            return this.saldo -= value
        }else{
            console.log("Saldo Tidak Mencukupi Untuk Melakukan Tarik Tunai")
        } return this.cekSaldo()
    }
    cekSaldo(){
        return  this.saldo
     }
}

const bank = new BankAccount()
bank.setData(12345678,100000) // Rp. 100.000
console.log("TOTAL SALDO SAAT INI : Rp. "+bank.cekSaldo())

const depo = bank.deposit(50000) // + 50.000 = 150.000
console.log("TOTAL SALDO SETELAH DEPOSIT : Rp. "+depo)

const tarik = bank.tarik(200000) // - 2000.0000 = Tidak Bisa tarik tunai

console.log("TOTAL SALDO : Rp. "+bank.cekSaldo())
console.log("===============================================\n")

const bank1 = new BankAccount()
bank1.setData(513515,50000) // Rp. 50000
console.log("TOTAL SALDO SAAT INI : Rp. "+bank.cekSaldo())

const depo1 = bank1.deposit(200000) // + Rp. 200.000 = Rp. 250.000
console.log("TOTAL SALDO SETELAH DEPOSIT : Rp. "+depo1)

const tarik1 = bank1.tarik(10000) // Rp. 10.000 = Rp. 240.000
console.log("TOTAL SALDO : Rp. "+bank1.cekSaldo())
console.log("=============================================== \n")

const bank2 = new BankAccount()
bank2.setData(45241424,10000)
console.log("TOTAL SALDO SAAT INI : Rp. "+bank.cekSaldo())

const depo2 = bank2.deposit(40000)
console.log("TOTAL SALDO SETELAH DEPOSIT : Rp. "+depo2)

const tarik2 = bank2.tarik(20000)
console.log("TOTAL SALDO : Rp. "+bank2.cekSaldo())