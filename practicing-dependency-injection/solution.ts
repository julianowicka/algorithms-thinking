class UserService {
    constructor(){
        
    }
    getUsers(){
        return [{name: "Julia"}, {name: "Sznupa"}]
    }
}
class UserController {
    private userService: UserService;

    constructor(userService: UserService){
        this.userService = userService
    }

    displayUsers() {
        const users = this.userService.getUsers()    
        console.log("users", users)
    }

}
console.log("hello")
const userService = new UserService()
const userController = new UserController(userService)
const userService2 = new UserService()
const userController2 = new UserController(userService2)
userController.displayUsers()
userController2.displayUsers()

console.log("finish")

