<div class="modal fade" id="modalExpCppl" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                </button>
            </div>
        <form id="formExpCppl">    
            <div class="modal-body" scrollY="true">
    <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                <div class="row">
                    <div class="col-lg-2">
                        <div class="form-group">
                            <input type="text" class="form-control" id="opcExpC" style="display:none">
                            <input type="text" class="form-control" id="idExpC" style="display:none">
                            <input type="text" class="form-control" id="num_empExpC" style="display:none ">                            
                            <label for="quantity" class="col-form-label">Años EXP Coppel</label>
                            <input type="number" class="form-control" id="aExpCppl" min="0" max="30"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="textarea" class="col-form-label">Experiencia Coppel</label>
                            <textarea class="form-control" id="expCppl"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label for="quantity" class="col-form-label">Años EPX Externa</label>
                            <input type="number" class="form-control" id="aExpExt" min="0" max="30">
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label for="" class="col-form-label">Experiencia Externa</label>
                            <textarea class="form-control" id="ExpExt"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id ="cierreModal">Cancelar</button>
                <button type="submit" id="btnGuardarExpCppl" class="btn btn-success">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>