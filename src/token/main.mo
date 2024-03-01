import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
actor Token {

    var owner : Principal = Principal.fromText("mlqx3-t4ki4-e3psc-zamtx-xmydq-tj3rl-hxytb-77iio-sowpy-22p4h-lae");
    var totalAmount : Nat = 1000000000000000;
    var sign : Text = "SAS COIN";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    balances.put(owner, totalAmount);

    public query func checkBalanceOf(user : Principal) : async Nat {
        let balance : Nat = switch (balances.get(user)) {
            case null 0;
            case (?res) res;
        };

        return balance;
    };

    public query func getSign() : async Text {
        return sign;
    };
};
