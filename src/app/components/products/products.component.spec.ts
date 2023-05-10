import { ProductsComponent } from "./products.component";
import { ProductsService } from '../../services/products.service';
import { AddToBusketService } from "../../services/add-to-busket.service";
import { VisitedListService } from "../../services/visited-list.service";
import { IsadminService } from "../../services/isadmin.service";
import { HttpClient } from "@angular/common/http";

describe('ProductsComponent', () => {
    let app: ProductsComponent;
    let productsService: ProductsService;
    let addToBusketService: AddToBusketService;
    let visitedListService: VisitedListService;
    let isAdminService: IsadminService;
    let http: HttpClient;
        beforeEach(()=>{
            productsService = new ProductsService(http);
            addToBusketService = new AddToBusketService();
            visitedListService = new VisitedListService();
            isAdminService = new IsadminService();
            http = jasmine.createSpyObj('http', ['get']);
            app = new ProductsComponent(
                productsService,
                addToBusketService,
                visitedListService,
                isAdminService,
              );
        })
        it('may create class instance', ()=>{
            expect(app).toBeTruthy
        })
        it('array of goods may be longer then 0', async () => {
            await app.ngOnInit();
            expect(app.products.length).toBeGreaterThan(0);
          });
        
  });

  

