class DataStorage{
    private infoMap: Map<string, any> = new Map();
    getData(fieldKey: string){
        return this.infoMap[fieldKey];
    }
    setData(fieldKey: string, fieldValue: any){
        console.log("data saved to storage");
        this.infoMap.set(fieldKey, fieldValue);
    }
}

class DataStoreProxy{
    private dataStorage: DataStorage;
    private adminsFields: string[] = ['password', 'username'];
    constructor(dataStorage: DataStorage){
        this.dataStorage = dataStorage;
    }

    getData(fieldKey: string){
        return this.dataStorage.getData(fieldKey)
    }

    setData(fieldKey: string, fieldValue: string, userRole: string){
        console.log('setData')
        if(this.isAccessAllowed(fieldKey, userRole)){
            console.log("Access allowed");
            this.dataStorage.setData(fieldKey, fieldValue);
        } else{
            console.log("Access denied");
        }
    }

    private isAccessAllowed(fieldKey, userRole): boolean{
        let fieldKeyIndex = this.adminsFields.indexOf(fieldKey);
        return (fieldKeyIndex != -1 && userRole == 'admin') || fieldKeyIndex == -1
    }
}

let dataStore = new DataStoreProxy(new DataStorage());

dataStore.setData('age', '20', 'user1');
console.log('______');
dataStore.setData('password', 'pass', 'user');
console.log('______');
dataStore.setData('password', 'pass', 'admin');


//////////////////////////////////////////

//
// export class AboutGuard implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
//         return confirm('Вы уверены, что хотите перейти?');
//     }
// }
//
// // определение маршрутов
// const appRoutes: Routes =[
//     { path: '', component: HomeComponent},
//     { path: 'about', component: AboutComponent, canActivate: [AboutGuard]}
// ];
//
// @NgModule({
//     imports: [ BrowserModule, RouterModule.forRoot(appRoutes)],
//     declarations: [ AppComponent, HomeComponent, AboutComponent],
//     providers: [AboutGuard],
//     bootstrap: [ AppComponent ]
// })
// export class AppModule { }