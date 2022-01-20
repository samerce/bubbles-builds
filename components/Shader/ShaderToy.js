import Effect from './Effect'

const gTime = "10"

function ShaderToy( parentElement, canvasId )
{
    if( parentElement===null ) return;

    this.mAudioContext = null;
    this.mCreated = false;
    this.mHttpReq = null;
    this.mEffect = null;
    this.mTo = null;
    this.mTOffset = gTime * 1000;
    this.mCanvas = null;
    this.mFpsFrame = 0;
    this.mFpsTo = null;
    this.mIsPaused = false;
    this.mForceFrame = true;
    this.mInfo = null;
    this.mCode = null;

    this.mCanvas = document.getElementById(canvasId);

    var ww = parentElement.offsetWidth;
    var hh = parentElement.offsetHeight;

    var me = this;
    // this.mCanvas.width  = ww;
    // this.mCanvas.height = hh;

    this.mHttpReq = new XMLHttpRequest();
    this.mTo = getRealTime();
    this.mTf = this.mTOffset;
    this.mFpsTo = this.mTo;
    this.mMouseIsDown = false;
    this.mMouseOriX = 0;
    this.mMouseOriY = 0;
    this.mMousePosX = 0;
    this.mMousePosY = 0;

    this.mAudioContext = piCreateAudioContext();

    this.mCanvas.onmousedown = function(ev)
    {
        var pos = piGetCoords( me.mCanvas );
        me.mMouseOriX =                     (ev.pageX - pos.mX)*me.mCanvas.width/me.mCanvas.offsetWidth;
        me.mMouseOriY = me.mCanvas.height - (ev.pageY - pos.mY)*me.mCanvas.height/me.mCanvas.offsetHeight;
        me.mMousePosX = me.mMouseOriX;
        me.mMousePosY = me.mMouseOriY;
        me.mMouseIsDown = true;
        if( me.mIsPaused ) me.mForceFrame = true;
    }
    this.mCanvas.onmousemove = function(ev)
    {
        if( me.mMouseIsDown )
        {
            var pos = piGetCoords( me.mCanvas );
            me.mMousePosX =                     (ev.pageX - pos.mX)*me.mCanvas.width/me.mCanvas.offsetWidth;
            me.mMousePosY = me.mCanvas.height - (ev.pageY - pos.mY)*me.mCanvas.height/me.mCanvas.offsetHeight;
            if( me.mIsPaused ) me.mForceFrame = true;
        }
    }
    this.mCanvas.onmouseup = function(ev)
    {
        me.mMouseIsDown = false;
        me.mMouseOriX = -Math.abs( me.mMouseOriX );
        me.mMouseOriY = -Math.abs( me.mMouseOriY );
        if( me.mIsPaused ) me.mForceFrame = true;
    }

    this.mCanvas.onkeydown = function(ev)
    {
        me.mEffect.SetKeyDown( 0, ev.keyCode );
        if( me.mIsPaused ) me.mForceFrame = true;
    }
    this.mCanvas.onkeyup = function(ev)
    {
        me.mEffect.SetKeyUp( 0, ev.keyCode );
        if( me.mIsPaused ) me.mForceFrame = true;
    }

    var resizeCB = function (xres, yres) { me.mForceFrame = true; };
    var crashCB = function () { /*iReportCrash(gShaderID);*/ };
    this.mEffect = new Effect(null, this.mAudioContext, this.mCanvas, this.RefreshTexturThumbail, this, true, false, resizeCB, crashCB );
    this.mCreated = true;
}

ShaderToy.prototype.compileAndStart = function(shader) {
    var me = this
    var gRes = me.Load(shader[0])

    if (gRes.mFailed) {
        me.pauseTime();
        me.resetTime();
    } else {
        me.Compile( function (worked) {
            if (!worked) return;
            if (me.mIsPaused) {
                me.Stop();
            }

            me.startRendering();
        });
    }
}

ShaderToy.prototype.startRendering = function()
{
    var me = this;

    function renderLoop2()
    {
        requestAnimFrame( renderLoop2 );

        if( me.mIsPaused && !me.mForceFrame )
        {
            me.mEffect.UpdateInputs( 0, false );
            return;
        }

        me.mForceFrame = false;
        var time = getRealTime();
        var ltime = me.mTOffset + time - me.mTo;

        if( me.mIsPaused ) ltime = me.mTf; else me.mTf = ltime;

        var dtime = 1000.0 / 60.0;

        me.mEffect.Paint(ltime/1000.0, dtime/1000.0, 60, me.mMouseOriX, me.mMouseOriY, me.mMousePosX, me.mMousePosY, me.mIsPaused );

        me.mFpsFrame++;

        if( (time-me.mFpsTo)>1000 )
        {
            me.mFpsFrame = 0;
            me.mFpsTo = time;
        }
    }

    renderLoop2();
}

//---------------------------------

ShaderToy.prototype.Stop = function()
{
    this.mIsPaused = true;
    this.mEffect.StopOutputs();
}

ShaderToy.prototype.pauseTime = function()
{
    var time = getRealTime();
    if( !this.mIsPaused )
    {
        this.Stop();
     }
    else
    {
        this.mTOffset = this.mTf;
        this.mTo = time;
        this.mIsPaused = false;
        this.mEffect.ResumeOutputs();
    }
}

ShaderToy.prototype.resetTime = function()
{
    this.mTOffset = 0;
    this.mTo = getRealTime();
    this.mTf = 0;
    this.mFpsTo = this.mTo;
    this.mFpsFrame = 0;
    this.mForceFrame = true;
    this.mEffect.ResetTime();
}


ShaderToy.prototype.PauseInput = function( id )
{
    return this.mEffect.PauseInput( 0, id );
}

ShaderToy.prototype.MuteInput = function( id )
{
    return this.mEffect.MuteInput( 0, id );
}

ShaderToy.prototype.RewindInput = function( id )
{
    this.mEffect.RewindInput( 0, id );
}

ShaderToy.prototype.SetTexture = function( slot, url )
{
    this.mEffect.NewTexture( 0, slot, url );
}

ShaderToy.prototype.RefreshTexturThumbail = function( myself, slot, img, forceFrame, gui, guiID, time )
{
  myself.mForceFrame = forceFrame;
}

ShaderToy.prototype.GetTotalCompilationTime = function()
{
    return this.mEffect.GetTotalCompilationTime();
}

ShaderToy.prototype.Load = function( jsn )
{
    try
    {
        var res = this.mEffect.Load( jsn, false );
        this.mCode = res.mShader;

        if( res.mFailed===false )
        {
            //this.resetTime();
            this.mForceFrame = true;
        }

        this.mInfo = jsn.info;

        return {
            mFailed: false,
                 mDate        : jsn.info.date,
                 mViewed      : jsn.info.viewed,
                 mName        : jsn.info.name,
                 mUserName    : jsn.info.username,
                 mDescription : jsn.info.description,
                 mLikes       : jsn.info.likes,
                 mPublished   : jsn.info.published,
                 mHasLiked    : jsn.info.hasliked,
                 mTags        : jsn.info.tags };

    }
    catch( e )
    {
        return { mFailed:true };
    }
}

ShaderToy.prototype.Compile = function (onResolve)
{
    this.mEffect.Compile(true, onResolve);
}

export default ShaderToy