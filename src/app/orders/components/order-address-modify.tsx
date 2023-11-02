import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";


const OrderAddressModify = () => {
  const [userForm, setUserForm] = useState({
    address: "",
    district: "",
    city: "",
    state: "",
    postalCode: "",
  });


  const handleSubmit = () => {
    let formIsValid = true;

    if (!formIsValid) return;

    alert(JSON.stringify(userForm));
  };

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button size="lg" variant="default">
                <p>Alterar Endereço de Entrega</p>
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Alterar Endereço de Entrega</AlertDialogTitle>
            <AlertDialogDescription>
            <div className="flex flex-col gap-3">
            <div className="form-group p-2">
                <label className="font-bold mb-2">Endereço</label>
                <Input
                className="w-full font-normal"
                type="text"
                placeholder="Informe seu endereço. Ex Rua...., nº ..."
                value={userForm.address}
                onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, address: e.target.value }))
                }
                />
            </div>

            <div className="form-group p-2">
                <label className="font-bold mb-2">Bairro</label>
                <Input
                className="w-full font-normal"
                type="text"
                placeholder="Informe seu bairro / distrito"
                value={userForm.district}
                onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, district: e.target.value }))
                }
                />
            </div>

            <div className="form-group p-2">
                <label className="font-bold mb-2">Cidade</label>
                <Input
                className="w-full font-normal"
                type="text"
                placeholder="Informe sua cidade"
                value={userForm.city}
                onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, city: e.target.value }))
                }
                />

            </div>

            <div className="form-group p-2">
                <label className="font-bold mb-2">UF / Estado</label>
                <Input
                className="w-full font-normal"
                type="text"
                placeholder="Informe sua UF / Estado"
                value={userForm.state}
                onChange={(e) =>
                    setUserForm((prev) => ({ ...prev, state: e.target.value }))
                }
                />
            </div>

            <div className="form-group p-2">
                <label className="font-bold mb-2">CEP</label>
                <Input
                    type="text"
                    className="w-full font-normal"
                    placeholder="Informe seu CEP. Ex 00001-000"
                    value={userForm.postalCode}
                    onChange={(e) =>
                        setUserForm((prev) => ({ ...prev, postalCode: e.target.value }))
                    }
                />
            </div>

            
            </div>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>
                <div className="form-group">
                    <button className="primary" onClick={handleSubmit}>Alterar</button>
                </div>
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderAddressModify;