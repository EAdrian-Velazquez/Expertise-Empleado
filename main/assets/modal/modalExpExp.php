<div class="modal fade" id="modalExpExt" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
            </div>
            <form id="formExpExt">    
                <div class="modal-body" scrollY="true">
        <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="form-group">
                                <input type="text" class="form-control" id="opcExpE" style="display:none ">
                                <input type="text" class="form-control" id="idExpE" style="display:none ">
                                <input type="text" class="form-control" id="num_empExpE" style="display:none ">
                                <label for="" class="col-form-label">Fecha</label>
                                <input type="date" class="form-control" id="fecha">
                            </div>
                        </div> 
                        <div class="col-lg-6 col-center">
                            <div class="form-group">
                                <label for="" class="col-form-label">Empresa</label>
                                <input type="text" class="form-control" id="empresa">
                            </div>
                        </div>
                        <div class="col-lg-4 col-center">
                            <div class="form-group">
                                <label for="" class="col-form-label">Puesto</label>
                                <input type="text" class="form-control" id="puesto">
                            </div>
                        </div>
                    </div>
        <!-------------------------------------------------- 2 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-10">
                            <div class="form-group">
                                <label for="" class="col-form-label">Actividad</label>
                                <textarea class="form-control" id="actividad"></textarea>
                            </div>
                        </div> 
                        <div class="col-lg-2">
                            <div class="form-group">
                                <label for="quantity" class="col-form-label">Antiguedad/Años</label>
                                <input type="number" class="form-control" id="antiguedad" min="0" max="30">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id ="cierreModalExt">Cancelar</button>
                    <button type="submit" id="btnGuardarExpExt" class="btn btn-success">Guardar</button>
                </div>
            </form>    
        </div>
    </div>
</div>