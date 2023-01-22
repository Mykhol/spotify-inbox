import Repository from "@/repositories/Repository";
import AccountModel from "@/models/Account.model";
import Account from "@/models/Account.model";
import Query from "@/databases/Query";
import Operator from "@/databases/Operator";

class AccountRepository extends Repository<AccountModel> {

  async getAccount(id: string) {
    return await this.database.get(new Query<Account>("_id", Operator.EQUALS, id))
  }

}

export default AccountRepository;